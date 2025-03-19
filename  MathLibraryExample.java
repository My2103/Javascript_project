import java.io.*;
public class MathLibraryExample {
public static void main(String[] args) {
       System.out.print("Input : ");

       int i = Integer.parseInt(System.console().readLine());
       double d = Math.sqrt(i); double e = 4 / d;
       double f = Math.round(e);

       System.out.println("sqrt(" + i +") = " + d); 
       System.out.println("4/" + d + " = " + e); 
       System.out.println("round(" + e + ") = " + f); 
       System.out.println(e + " > 0 : " + (e > 0)); 
       System.out.println(e + " <= 0 : " + (e <= 0));
       
       for (d = 0.4; d < 0.7; d = d + 0.1) {
           double r = i + d * Math.signum(i);
           System.out.println("round(" + r + ") = " + Math.round(r)); 
        }
    }
}