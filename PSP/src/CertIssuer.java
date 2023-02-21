import java.io.FileOutputStream;
import java.math.BigInteger;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.SecureRandom;
import java.security.cert.X509Certificate;
import java.util.Date;
import sun.security.x509.*;

public class CertIssuer {

//Medida de las claves
public static final int KEY_LEN = 2048;

//Fecha de expiración
private static final int EXPIRATION = 365;

//Algoritmo de firma a usar
private static final String ALGORITHM = «SHA1withRSA»;

/** Genera un certificado autofirmado
*
* @param subName Nombre del propietario.
* @param pubKey Clave pública del propietario.
* @param issName Nombre del emisor..
* @param issKey Clave privada del emisor, para firmar el certificado.
* @return Certificado X.509.
* @throws Exception Error.
*/
public X509Certificate generateCertificate(String subName, PublicKey pubKey, String issName, PrivateKey issKey) throws Exception {

//Todo certificado tiene un número de serie único
BigInteger sn = new BigInteger(64, new SecureRandom());

//Calcular fecha de expiración
Date from = new Date();
Date to = new Date(from.getTime() + EXPIRATION * 86400000l);
CertificateValidity interval = new CertificateValidity(from, to);

//Se generan las identidades de propietario y emisor
X500Name owner = new X500Name(subName);
X500Name issuer = new X500Name(issName);

//Se genera la información del certificado
X509CertInfo info = new X509CertInfo();
info.set(X509CertInfo.VALIDITY, interval);
info.set(X509CertInfo.SERIAL_NUMBER, new CertificateSerialNumber(sn));
info.set(X509CertInfo.SUBJECT, new CertificateSubjectName(owner));
info.set(X509CertInfo.ISSUER, new CertificateIssuerName(issuer));
info.set(X509CertInfo.KEY, new CertificateX509Key(pubKey));
info.set(X509CertInfo.VERSION, new CertificateVersion(CertificateVersion.V3));
AlgorithmId algo = new AlgorithmId(AlgorithmId.sha1WithRSAEncryption_oid);
info.set(X509CertInfo.ALGORITHM_ID, new CertificateAlgorithmId(algo));

//Se firma el certificado
X509CertImpl cert = new X509CertImpl(info);
cert.sign(issKey, ALGORITHM);

//Se actualiza el campo del algoritmo y se vuelve a firmar
algo = (AlgorithmId)cert.get(X509CertImpl.SIG_ALG);
info.set(CertificateAlgorithmId.NAME + «.» + CertificateAlgorithmId.ALGORITHM, algo);
cert = new X509CertImpl(info);
cert.sign(issKey, ALGORITHM);
return cert;
}

/** Se genera un certificado autofirmado a partir de un par de claves al azar.
*/
public static void main (String[] args) throws Exception {

CertIssuer certIssue = new CertIssuer();

KeyPairGenerator keyGen = KeyPairGenerator.getInstance(«RSA»);
keyGen.initialize(KEY_LEN);
KeyPair kPair = keyGen.genKeyPair();

String subject = "«CN=localhost, OU=cesur, O=cesur, L=Sevilla, ST=Sevilla, C=ES»";
X509Certificate cert = certIssue.generateCertificate(subject, kPair.getPublic(), subject, kPair.getPrivate());

FileOutputStream certFile = new FileOutputStream(«certificado.crt»);
certFile.write(cert.getEncoded());
certFile.close();
}
}