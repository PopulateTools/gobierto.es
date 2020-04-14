---
title: Evolución de la deuda municipal
layout: v2/slim
---

<div class="tool">

  <div class="pure-g">

    <div class="pure-u-1 pure-u-md-1-4">
      <div class="stick_ip">
        <menu>
          <div class="doc_index"></div>
        </menu> 
      </div>
    </div>

    <div class="pure-u-1 pure-u-md-3-4 indexed_content">

      <div class="block">
        <h2>¿Cómo ha evolucionado la deduda de los municipios en los últimos años?</h2>
        <div class="block_content pure-g">
          <div class="pure-u-1 pure-u-md-2-3">
            <iframe style="width:100%;height:450px;" frameborder="0" marginwidth="0" marginheight="0" scrolling="yes" src="/charts/evolucion-deuda/#450"></iframe>
          </div>
          <div class="pure-u-1 pure-u-md-1-3 insights">
            <ul>
              <li>Los municipios tienen una deuda pendiente de 28.735 millones de €, o 616 € por habitante.</li>
              <li>La deuda vuelve a estar en niveles de 2010. En 2012 subió un 23% (respecto a 2010), hasta los 35.163 millones de euros.</li>
              <li>Lleva 3 años consecutivos bajando</li>
              <li>30 municipios acumulan alrededor del 50% de la deuda, y representan el 25% de la población.</li>
              <li>Los municipios dedican de media un 6,54% de su presupuesto a pagar la deuda (en los pueblos de más de 50.000 habitantes, el porcentaje sube al 10%)</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="block">
        <h2>Glosario</h2>
        <div class="block_content">
          <dl>
            <dt>Deuda viva:</dt>
            <dd>Deuda que mantiene el ayuntamiento de un municipio con los bancos en cuestión de créditos financieros, valores de renta fija y préstamos o créditos a terceros. No incluye la deuda comercial con los proveedores, sólo con los bancos.</dd>

            <dt>Partida de Deuda Pública:</dt>
            <dd>Comprende los gastos de intereses y amortización de la deuda y demás operaciones financieras de naturaleza análoga, con exclusión de los gastos que ocasione la formalización de los mismos</dd>

            <dt>Déficit y superávit:</dt>
            <dd>Ambos términos se refieren a la diferencia que existe entre la cantidad económica
            ingresasa y gastada durante un cierto periodo de tiempo. Si esta cantidad es positiva, se
            habla de <strong>superávit</strong> y si es negativa de <strong>déficit</strong>.</dd>
          </dl>
        </div>
      </div>

      <div class="block">
        <h2>Visualiza y analiza la deuda viva municipal</h2>
        <div class="block_content">
          <iframe style="width:100%;height:590px;" frameborder="0" marginwidth="0" marginheight="0" scrolling="yes" src="/charts/explora-deuda/#590"></iframe>
        </div>
      </div>

      <div class="block">
        <h2>Deuda por habitante</h2>
        <div class="block_content">
          wadus
        </div>
      </div>

      <div class="block">
        <h2>Municipios con mayor aumento y descenso de la deuda </h2>
        <div class="block_content">
          wadus
        </div>
      </div>

      <div class="block">
        <h2>Metodología y Fuentes</h2>
        <div class="block_content">
          <p><strong>Datos deuda municipal:</strong>Los datos de la deuda viva se han obtenido a través del <a href="http://www.minhap.gob.es/es-ES/Areas%20Tematicas/Administracion%20Electronica/OVEELL/Paginas/DeudaViva.aspx" target="_blank">Ministerio de Hacienda y Administraciones Públicas</a>.</p>
          <p>El dato de la deuda corresponde a la deuda viva a 31 de diciembre del año citado de cada uno de los ayuntamientos. Esta cifra incluye:</p>

          <ul>
            <li>Deudas con entidades de crédito obligadas a declarar a la Central de Información de
            Riesgos del Banco de España, como bancos, cajas de ahorro, cooperativas de crédito,
            sucursales en España de entidades de crédito no residentes y establecimientos financieros
            de crédito.</li>

            <li>Las cuantías correspondientes a emisiones de deuda pública.  Se utiliza el protocolo
            de déficit excesivo y para valorar la cuantía de la deuda se han considerado:
              <ul>
                <li>Créditos financieros</li>
                <li>Valores de renta fija</li>
                <li>Productos devengados por activos dudosos</li>
                <li>Préstamos o créditos transferidos a terceros</li>
                <li>Factoring sin recurso</li>
                <li>Fondo de Financiación Pago a Proveedores</li>
                <li>Asociaciones Publico Privadas (APP’s)</li>
              </ul>
            </li>
          </ul>
          <p><a
          href="http://www.minhap.gob.es/Documentacion/Publico/DGCFEL/DeudaViva/Informe%20Deuda%20Viva%202015%20Total_OVEL_20160506.pdf"
          target="_blank">Más información</a></p>

          <p><strong>Datos presupuestarios:</strong>Los datos económicos de los presupuestos de los municipios están extraídos de la base de datos que publica el Ministerio de Economía y Hacienda a través de la Secretaría General de Coordinación Autónomica y Local. La publicación de esta base de datos se realiza en esta URL: <a href="http://serviciosweb.meh.es/apps/EntidadesLocales">serviciosweb.meh.es/apps/EntidadesLocales</a>.  Se publican de forma anual datos sobre los presupuestos y la ejecución presupuestaria.</p>

          <p>Los datos se publican en formato Microsoft Access. Populate ha transformado esta base de datos para la carga en su sistema y ha publicado dicho código. La Secretaría publica una Nota Metodológica sobre los datos de los presupuestos. La última actualización de los datos de los presupuestos corresponde a la actualización del 30/12/2015 por parte del Ministerio.</p>

          <p><strong>Datos de población:</strong> La información sobre la población de los municipios proviene del INE, extraída y transformada usando la librería <a href="https://github.com/PopulateTools/ruby-px">Ruby-PX</a> desarrollada por <a href="http://populate.tools">Populate</a>.</p>
        </div>
      </div>

    </div>
  </div>
</div>
