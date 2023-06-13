""" Funciones """

def sumar(a, b):
    return a + b;

def restar(a, b): 
    return a - b

multiplicar = lambda a, b: a * b

sumar(10, 10)
restar(34, 8)
multiplicar(10, 10)

def operacion(func, a, b):
    return func(a, b)

result = operacion(sumar, 10, 30)
print(result)