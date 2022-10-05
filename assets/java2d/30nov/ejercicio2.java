import java.awt.*;
import java.awt.geom.*;
import javax.swing.JFrame;
import java.awt.Graphics;
import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class ejercicio2 extends JFrame {
    public ejercicio2() {
        super("Ejercicio 2");
        Container c = getContentPane();
        c.setLayout(new FlowLayout());
        this.setSize(300, 300);
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setVisible(true);
    }

    public static void main(String[] args) {
        ejercicio2 e = new ejercicio2();
    }

    public void paint(Graphics g) {
        Graphics2D g2 = (Graphics2D) g;
        // Primera parte del ejemplo
        int ancho = this.getSize().width;
        int largo = this.getSize().height;

        AffineTransform aT = g2.getTransform();
        aT.translate(ancho / 2, largo / 2);
        g2.transform(aT);
        aT.setToRotation(Math.PI / 4.0);
        for (int i = 0; i < 8; i++) {
            g2.drawString("Java2D", 0.0f, 0.0f);
            g2.transform(aT);

        }
    }
}