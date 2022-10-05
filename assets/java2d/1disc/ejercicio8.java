import java.awt.*;
import java.awt.geom.*;
import javax.swing.JFrame;
import java.awt.Graphics;
import java.awt.image.BufferedImage;

public class ejercicio8 extends JFrame {
    public ejercicio8() {
        super("Ejercicio 8");
        Container c = getContentPane();
        c.setLayout(new FlowLayout());
        this.setSize(250, 250);
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setVisible(true);
    }

    public static void main(String[] args) {
        ejercicio8 e = new ejercicio8();
    }

    public void paint(Graphics g){
        Graphics2D g2=(Graphics2D)g;
        BufferedImage bi= new BufferedImage (5,5,BufferedImage.TYPE_INT_RGB);
        Graphics2D bigr =bi.createGraphics();
        bigr.setColor(Color.orange);
        Rectangle2D r2 = new Rectangle2D.Float(0.0f,0.0f,5.0f,5.0f);
        bigr.fill(r2);
        bigr.setColor(Color.red);
        Ellipse2D e2 = new Ellipse2D.Float(0.0f,0.0f,5.0f,5.0f);
        bigr.fill(e2);
        Rectangle2D r3 = new Rectangle2D.Double(0.0,0.0,5.0,5.0);
        TexturePaint tp=new TexturePaint(bi,r3);
        g2.setPaint(tp);
        Rectangle2D rt = new Rectangle2D.Float(0.0f,0.0f,250.0f,250.0f);
        g2.fill(rt);
    }
}