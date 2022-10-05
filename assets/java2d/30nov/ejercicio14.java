import java.awt.*;
import java.awt.geom.*;
import javax.swing.JFrame;
import java.awt.Graphics;
import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class ejercicio14 extends JFrame {
    public ejercicio14() {
        super("Ejercicio 14");
        Container c = getContentPane();
        c.setLayout(new FlowLayout());
        this.setSize(300, 300);
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setVisible(true);
    }

    public static void main(String[] args) {
        ejercicio14 e = new ejercicio14();
    }

    public void paint(Graphics g) {
        Graphics2D g2 = (Graphics2D) g;
        // Dibujo del cielo Este es el fondo // Dibujo del cielo. Este es el fondo.
        // Se ha usado un gradiente que va desde el azul al negro
        GradientPaint gp1 = new GradientPaint(10.0f, 125.0f, Color.blue, 250.0f, 125.0f, Color.black);
        Rectangle2D r = new Rectangle2D.Double(0.0, 0.0, 250.0, 250.0);
        g2.setPaint(gp1);
        g2.setPaint(gp1);
        g2.fill(r);
        // Dibujo de la luna sobre el fondo
        GradientPaint gp2 = new GradientPaint(50.0f, 50.0f, Color.yellow, 300.0f, 50.0f, Color.darkGray);
        g2.setPaint(gp2);
        Ellipse2D e1 = new Ellipse2D.Double(70.0, 100.0, 80.0, 80.0);
        Ellipse2D e2 = new Ellipse2D.Double(100.0, 100.0, 80.0, 80.0);
        Area a1 = new Area(e1);
        Area a2 = new Area(e2);
        new Area(e2);
        a1.subtract(a2);
        g2.fill(a1);
        g2.fill(a1);
    }
}
