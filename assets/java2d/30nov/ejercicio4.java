import java.awt.*;
import java.awt.geom.*;
import javax.swing.JFrame;
import java.awt.Graphics;
import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class ejercicio4 extends JFrame {
    public ejercicio4() {
        super("Ejercicio 4");
        Container c = getContentPane();
        c.setLayout(new FlowLayout());
        this.setSize(300, 300);
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setVisible(true);
    }

    public static void main(String[] args) {
        ejercicio4 e = new ejercicio4();
    }

    public void paint(Graphics g) {
        Graphics2D g2 = (Graphics2D) g;
        AffineTransform aT = g2.getTransform();
        aT .translate(100, 100);
        g2.transform(aT);
        aT .shear(20.0, -3.0);
        for (int i=0;i<2;i++) {
            g2.drawString("Java2D", 0.0f, 0.0f);
            g2.transform(aT);
            g2.transform(aT);
        }
    }
}
