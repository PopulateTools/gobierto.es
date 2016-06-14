---
layout: slim
title: Evolución de la deuda municipal
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
            <iframe style="width:100%;height:450px;" frameborder="0" marginwidth="0" marginheight="0" scrolling="yes" src="/charts/debt-evolution/#450"></iframe>
          </div>
          <div class="pure-u-1 pure-u-md-1-3 insights">
            <ul>
              <li>Los municipios tienen una deuda pendiente de 28.735 millones de €, o 616 € por habitante.</li>
              <li>30 municipios acumulan alrededor del 50% de la deuda, y representan el 25% de la población.</li>
              <li>La deuda vuelve a estar en niveles de 2010. En 2013 subió un 22% (respecto a 2010), hasta los 34.906 millones de euros.</li>
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
          <dd>Deuda adquirida por un municipio</dd>

          <dt>Partida de Deuda Pública:</dt>
          <dd>Partida presupuestaria destinada a pagar la deuda adquirida</dd>

          <dt>Déficit</dt>
          <dd></dd>

          <dt>Superávit</dt>
          <dd></dd>
        </dl>
        </div>
      </div>

      <div class="block">
        <h2>Visualiza y analiza la deuda viva municipal</h2>
        <div class="block_content">
          <div id="analyzeDebt"></div>
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
          <p><strong>Datos presupuestarios:</strong>Los datos económicos de los presupuestos de los municipios están extraídos de la base de datos que publica el Ministerio de Economía y Hacienda a través de la Secretaría General de Coordinación Autónomica y Local. La publicación de esta base de datos se realiza en esta URL: <a href="http://serviciosweb.meh.es/apps/EntidadesLocales">serviciosweb.meh.es/apps/EntidadesLocales</a>. Se publican de forma anual datos sobre los presupuestos y la ejecución presupuestaria.</p>

          <p>Los datos se publican en formato Microsoft Access. Populate ha transformado esta base de datos para la carga en su sistema y ha publicado dicho código. La Secretaría publica una Nota Metodológica sobre los datos de los presupuestos. La última actualización de los datos de los presupuestos corresponde a la actualización del 30/12/2015 por parte del Ministerio.</p>

          <p><strong>Datos de población:</strong> La información sobre la población de los municipios proviene del INE, extraída y transformada usando la librería <a href="https://github.com/PopulateTools/ruby-px">Ruby-PX</a> desarrollada por <a href="http://populate.tools">Populate</a>.</p>

          <p>Temporalmente, los datos de población (población total y gasto por habitante) de 2010 están calculados basados en los de 2011. En cuando podamos cargaremos los datos de población de 2010.</p>
        </div>
      </div>

    </div>

  </div>

</div>


