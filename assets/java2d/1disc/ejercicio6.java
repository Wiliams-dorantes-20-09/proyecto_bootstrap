import javax.swing.*;
import java.awt.*;
import java.awt.geom.*;


public class ejercicio6 extends JFrame {
    public ejercicio6() {
        super("Punteros");
        Container c = getContentPane();
        c.setLayout(new FlowLayout());
        this.setSize(250, 250);
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setVisible(true);
    }

    public static void main(String[] args) {
        ejercicio6 e = new ejercicio6();
    }

    public void paint(Graphics g) {
        Graphics2D g2 = (Graphics2D) g;
        Rectangle2D r2 = new Rectangle2D.Float(200, 150, 100, 25);
        float punteo1[] = { 10.0f, 4.0f };
        BasicStroke pincel1 = new BasicStroke(4.0f, BasicStroke.CAP_ROUND, BasicStroke.JOIN_MITER, 3.0f, punteo1,
                10.0f);
        g2.setStroke(pincel1);
        g2.setStroke(pincel1);
        g2.draw(r2);
        Rectangle2D r3 = new Rectangle2D.Float(200, 300, 100, 25);
        float punteo2[] = { 10.0f, 30f, 10.0f, 4.0f, 2.0f, 8.0f };
        BasicStroke pincel2 = new BasicStroke(4.0f, BasicStroke.CAP_ROUND, BasicStroke.JOIN_MITER, 3.0f, punteo2,
                10.0f);
        g2.setStroke(pincel2);
        g2.draw(r3);
    }
}