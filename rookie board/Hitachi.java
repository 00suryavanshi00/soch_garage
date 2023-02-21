public class Hitachi implements Harddrive{
    String color;
    Hitachi(){
        super();
        this.color = "Red";
    }
    @Override
    public void display() {
        System.out.println("It's working ");
    }
}
