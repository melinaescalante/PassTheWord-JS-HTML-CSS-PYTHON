from flask import Flask, render_template

app = Flask('app')


@app.route('/')
def mostrarInicio():
    return render_template('proyecto.html')
  
@app.route('/inicio')
def inicio():
  return render_template('proyecto.html')

@app.route('/juego')
def mostrarJuego():
    return render_template('juego.html')


@app.route('/informacion')
def mostrarInformacion():
    return render_template('informacion.html')


@app.route('/final')
def mostrarFinal():
    return render_template('final.html')


@app.route('/jugar')
def jugar():
    return render_template('jugar.html')


@app.route('/salirJuego')
def salirJuego():
  return render_template('proyecto.html')


app.run(host='0.0.0.0', port=8080)
