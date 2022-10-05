import java.awt.*;
import java.awt.geom.*;
import javax.swing.JFrame;
import java.awt.Graphics;
import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class ejercicio3 extends JFrame {
    public ejercicio3() {
        super("Ejercicio 3");
        Container c = getContentPane();
        c.setLayout(new FlowLayout());
        this.setSize(300, 300);
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setVisible(true);
    }

    public static void main(String[] args) {
        ejercicio3 e = new ejercicio3();
    }

    public void paint(Graphics g) {
        Graphics2D g2 = (Graphics2D) g;
        AffineTransform aT = g2.getTransform();
        aT.translate(10, 170);
        g2.transform(aT);
        aT.setToScale(2.5f, 2.5f);
        for (int i = 0; i < 3; i++) {
            g2.drawString("Java2D", 0.0f, 0.0f);
            g2.transform(aT);
            g2.transform(aT);
        }

    }
}
