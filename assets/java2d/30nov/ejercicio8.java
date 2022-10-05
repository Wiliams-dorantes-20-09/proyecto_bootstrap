import java.awt.*;
import java.awt.geom.*;
import javax.swing.JFrame;
import java.awt.Graphics;
import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class ejercicio8 extends JFrame {
    public ejercicio8() {
        super("Ejercicio 8");
        Container c = getContentPane();
        c.setLayout(new FlowLayout());
        this.setSize(300, 300);
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setVisible(true);
    }

    public static void main(String[] args) {
        ejercicio8 e = new ejercicio8();
    }

    public void paint (Graphics g) {
        super.paint(g);
        Graphics2D g2 = (Graphics2D)g;
        // Dibujo del rectángulo de referencia
        g2.setColor(Color.blue);
        g2.setStroke(new BasicStroke(1.0f));
        Rectangle2D r = new Rectangle2D.Float(100.0f, 75.0f, 50.0f, 100.0f);
        g2.draw(r);
        // Dibujo del arco
        g2.setColor(Color.red);
        g2.setStroke(new BasicStroke(3.0f));
        Arc2D a = new Arc2D.Float(100.0f, 75.0f, 50.0f, 100.0f, 0.0f, 135.0f, Arc2D.PIE);
        g2.draw(a);
        }
        
}