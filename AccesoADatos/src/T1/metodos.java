package T1;


import java.io.*;
import java.util.Scanner;

public class metodos {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int opcion;
        

        try {
            menu.imprimirMenu();
            opcion = sc.nextInt();

            switch (opcion) {
                case 1:
                importarTXT(null, null);
                    break;
                case 2:
                importarRPC(null, null);
                    break;
                case 3:

                    break;

                default:
                    break;
            }
        } catch (Exception e) {
            // TODO: handle exception
        }

        
        
    }

    public static void importarTXT(String ficheroActual, String ficheroTXT) throws IOException {
        FileReader in = null;
        FileWriter out = null;
        try { // crea flujos de entrada y salida

            in = new FileReader("archivooriginal.txt");
            out = new FileWriter("archivocopiado.txt");
            int c; // guarda cada byte en una variable tipo int
            while ((c = in.read()) != -1) {// lee un byte en c
                out.write(c); // escribe el caracter
            }
        } finally { // Cierra los flujos

            if (in != null)
                in.close();
            if (out != null)
                out.close();
        }
    }

    public static void importarRPC(String ficheroActual, String ficheroRPC) throws IOException {
        FileInputStream in = null;
        FileOutputStream out = null;
        try {
            in = new FileInputStream(ficheroRPC);
            out = new FileOutputStream(ficheroActual);
            int b;
            while ((b = in.read()) != -1) {
                out.write(b);
            }
        } finally {
            if (in != null)
                in.close();
            if (out != null)
                out.close();
        }
    }
}
