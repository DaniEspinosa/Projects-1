package T1;

import java.io.EOFException;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.util.Scanner;

public class aleatorio {
    static Scanner scanner = new Scanner(System.in);
    static RandomAccessFile fichero = null;

    public static void main(String[] args) {
        int numero;
        try {
            // fichero para el almacenaje de las mercancías
            fichero = new RandomAccessFile("C:\\Users\\DanielEspinosaMauri\\eclipse-workspace\\AccesoADatos\\src\\T1\\ficheros\\mercancia.dat", "rw");
            mostrarFichero(); // muestra el contenido original del fichero
            System.out.print("Introduce las unidades recibidas: ");
            numero = scanner.nextInt();
            fichero.seek(fichero.length()); // nos colocamos al final del fichero
            fichero.writeInt(numero); // se escribe el entero
            mostrarFichero();// muestra el contenido del fichero después de añadir el número
        } catch (FileNotFoundException ex) {
            System.out.println(ex.getMessage());
        } catch (IOException ex) {
            System.out.println(ex.getMessage());
        } finally {
            try {
                if (fichero != null) {
                    fichero.close();
                }
            } catch (IOException e) {
                System.out.println(e.getMessage());
            }
        }
    }

    public static void mostrarFichero() {
        int n;
        try {
            fichero.seek(0); // principio del fichero
            while (true) {
                n = fichero.readInt(); // leemos un entero
                System.out.println(n); // lo mostramos
            }
        } catch (EOFException e) {
            System.out.println("Fin de fichero");
        } catch (IOException ex) {
            System.out.println(ex.getMessage());
        }
    }
}
