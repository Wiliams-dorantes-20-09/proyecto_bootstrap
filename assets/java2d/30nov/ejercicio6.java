import java.awt.*;
import java.awt.geom.*;
import javax.swing.JFrame;
import java.awt.Graphics;
import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class ejercicio6 extends JFrame {
    public ejercicio6() {
        super("Ejercicio 6");
        Container c = getContentPane();
        c.setLayout(new FlowLayout());
        this.setSize(300, 300);
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setVisible(true);
    }

    public static void main(String[] args) {
        ejercicio6 e = new ejercicio6();
    }

    public void paint (Graphics g) {
        super.paint(g);
        Graphics2D g2 = (Graphics2D)g;
        // Creación del Rectangle2D
        g2.setColor(Color.red);
        g2.setStroke (new BasicStroke(3.0f)) ;
        Rectangle2D r = new Rectangle2D.Float(100.0f, 75.0f, 50.0f, 100.0f);
        g2.draw(r);
        
    }
}
