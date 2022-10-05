from tkinter import *

ventana = Tk ()
ventana.geometry('300x400')
Label1 = Label(ventana, text="indica tu lenguaje programado", font=('arial', 14))
Label1.place(x=10, y=20)
Label2 = Label(ventana, font=('arial', 16))
Label2.place(x=10, y=150)

def lenguajes():
     if seleccion.get() == 1 :
        Label2.config(text = 'seleccionaste python')
     if seleccion.get() == 2 :
        Label2.config(text = 'seleccionaste JAVA')
     if seleccion.get() == 3 :
        Label2.config(text = 'seleccionaste C++')


seleccion = IntVar()
seleccion.set(3)
radio1 = Radiobutton(ventana, text='PYTHON', variable = seleccion, value=1, command=lenguajes)
radio1.place(x=10, y=60)
radio2 = Radiobutton(ventana, text='JAVA', variable = seleccion, value=2, command=lenguajes)
radio2.place(x=10, y=90)
radio3 = Radiobutton(ventana, text='C++', variable = seleccion, value=3, command=lenguajes)
radio3.place(x=10, y=120)

ventana.mainloop()