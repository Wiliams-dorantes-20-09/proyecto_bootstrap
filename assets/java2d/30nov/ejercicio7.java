import java.awt.*;
import java.awt.geom.*;
import javax.swing.JFrame;
import java.awt.Graphics;
import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class ejercicio7 extends JFrame {
    public ejercicio7() {
        super("Ejercicio 7");
        Container c = getContentPane();
        c.setLayout(new FlowLayout());
        this.setSize(300, 300);
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setVisible(true);
    }

    public static void main(String[] args) {
        ejercicio7 e = new ejercicio7();
    }

    public void paint (Graphics g) {
        super.paint(g);
        Graphics2D g2 = (Graphics2D)g;
        // Dibujo delrectángulo redondeado
        g2.setColor(Color.pink);
        g2.setStroke( new BasicStroke(3.0f));
        RoundRectangle2D q = new RoundRectangle2D.Float(50.0f, 50.0f, 100.0f, 150.0f, 25.0f, 25.0f);
        g2.draw(q);
        
    }
}