import java.awt.*;
import java.awt.geom.*;
import javax.swing.JFrame;
import java.awt.Graphics;
import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class ejercicio13 extends JFrame {
    public ejercicio13() {
        super("Ejercicio 1");
        Container c = getContentPane();
        c.setLayout(new FlowLayout());
        this.setSize(300, 300);
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setVisible(true);
    }

    public static void main(String[] args) {
        ejercicio13 e = new ejercicio13();
    }

    public void paint(Graphics g) {
        Graphics2D g2 = (Graphics2D) g;
        GradientPaint gp = new GradientPaint(50.0f, 50.0f, Color.blue, 200.0f, 50.0f, Color.red);
        g2.setPaint(gp);
        Ellipse2D e1 = new Ellipse2D.Double(50.0, 50.0, 80.0, 80.0);
        Ellipse2D e2 = new Ellipse2D.Double(100.0, 50.0, 80.0, 80.0);

        Area a1 = new Area(e1);
        new Area(e1);
        Area a2 = new Area(e2);
        // a1 add(a2); // a1.acleardd(a2);
        // a1.intersect(a2);
        // a1 subtract(a2); // a1.subtract(a2);
        a1.exclusiveOr(a2);
        g2.fill(a1);
    }
}