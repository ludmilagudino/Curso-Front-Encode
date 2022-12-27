// Una empresa que fabrica luces de Navidad nos ha pedido que le echemos una mano.

// Tienen unas tiras led que son como un Array. Cada posición es un led y puede ser estar encendido (1) o apagado (0).

// Cada 7 segundos, los leds cambian de estado de esta forma:

// Si el led está apagado, se enciende si el led de su izquierda (index - 1) estaba encendido antes.
// Si el led está encendido, se mantiene siempre encendido.

// Nos han pedido un programa que nos diga cuantos segundos deben pasar hasta que todos los leds están encendidos. Los segundos se expresan en un número entero.