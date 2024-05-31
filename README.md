# Binance Chart

Cómo se usa la API de Binance: En la aplicación la utilizamos mediante el servicio "crypto-service.ts",
el cual contiene dos funciones donde.

    1 - getCryptoPrices: Obtiene los precios actuales del par seleccionado
    2 - getCryptoSymbols: Obtiene los pares disponibles para poder mostrar su precio (Limitado a los primeros 5 resultados)

Decisiones de diseño tomadas: En cuanto al diseño opté por algo "minimalista", ya que suele ser mas atractivo visualmente
en lo personal. Con un panel en la izquierda que da un fácil acceso a los pares disponibles y que el usuario los pueda
escoger, y a su derecha la tabla que muestra los precios actuales y anteriores

Punto adicional: Se desarrolló la app con el manejador de estados ZUSTAND, me permite controlar cada propiedad de una manera
intuitiva y fácil de entender
