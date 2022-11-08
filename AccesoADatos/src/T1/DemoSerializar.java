package T1;

import java.io.*;

public class DemoSerializar {
    public static void main(String[] args) {
        EmpleadoSerial e = new EmpleadoSerial();
        e.nombre = "Daniel";
        e.direccion = "Calle Arjona, 3";
        e.DNI = 29087695;
        e.numero = 352;

        try {
            FileOutputStream archivo = new FileOutputStream("C:\\Users\\DanielEspinosaMauri\\GitHub\\Asignaturas\\AccesoADatos\\src\\T1\\ficheros\\empleados.ser");
            ObjectOutputStream salida = new ObjectOutputStream(archivo);
            
            salida.writeObject(e);
            salida.close();
            archivo.close();
            System.out.println("Datos guardados en empleados.ser");

        } catch (Exception error) {
            // TODO: handle exception
        }
    }
}
