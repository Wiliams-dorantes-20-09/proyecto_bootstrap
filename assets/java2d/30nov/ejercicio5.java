import java.awt.*;
import java.awt.geom.*;
import javax.swing.JFrame;
import java.awt.Graphics;
import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class ejercicio5 extends JFrame {
    public ejercicio5() {
        super("Ejercicio 5");
        Container c = getContentPane();
        c.setLayout(new FlowLayout());
        this.setSize(300, 300);
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setVisible(true);
    }

    public static void main(String[] args) {
        ejercicio5 e = new ejercicio5();
    }

    public void paint (Graphics g) {
        super.paint(g);
        Graphics2D g2 = (Graphics2D)g;
        // Dibujo dela línea
        g2.setColor(Color.pink);
        g2.setStroke(new BasicStroke(3.0f));
        Line2D l = new Line2D.Float(50.0f, 50.0f, 200.0f, 200.0f);
        g2.draw(l);
        
    }
}