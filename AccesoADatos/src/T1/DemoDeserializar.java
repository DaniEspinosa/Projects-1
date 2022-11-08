package T1;

import java.io.*;

public class DemoDeserializar {
    public static void main(String[] args) {
        EmpleadoSerial e = null;

        try {
            FileInputStream archivo = new FileInputStream("C:\\Users\\DanielEspinosaMauri\\GitHub\\Asignaturas\\AccesoADatos\\src\\T1\\ficheros\\empleados.ser");
            ObjectInputStream entrada = new ObjectInputStream(archivo);

            e = (EmpleadoSerial) entrada.readObject();
            entrada.close();
            archivo.close();

        } catch (Exception error) {
            // TODO: handle exception
        }

        System.out.println("Deserializando al empleado...");
        System.out.println("Nombre: " + e.nombre);
        System.out.println("Direccion: " + e.direccion);
        System.out.println("DNI: " + e.DNI);
        System.out.println("Numero: " + e.numero);
        e.chequeCorreo();
    }
}
