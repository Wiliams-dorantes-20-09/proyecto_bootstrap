import javax.swing.*;
import java.awt.*;
import java.awt.geom.*;


public class ejercicio2 extends JFrame {
    public ejercicio2() {
        super("Ejercicio 2");
        Container c = getContentPane();
        c.setLayout(new FlowLayout());
        this.setSize(250, 250);
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setVisible(true);
    }

    public static void main(String[] args) {
        ejercicio2 e = new ejercicio2();
    }

    public void paint(Graphics g) {
        Rectangle2D r2 = new Rectangle2D.Float(75, 50, 100, 25);
        Graphics2D g2 = (Graphics2D) g;
        Stroke pincel = new BasicStroke(4.0f, BasicStroke.CAP_ROUND, BasicStroke.JOIN_MITER);
        g2.setStroke(pincel);
        g2.draw(r2);
    }

}
