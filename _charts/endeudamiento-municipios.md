---
title: Endeudamiento municipios respecto al total de su presupuesto
layout: v1/chart
description: Endeudamiento municipios respecto al total de su presupuesto
source_name: Ministerio Hacienda y Administraciones Públicas
source_url: http://www.minhap.gob.es/es-ES/Areas%20Tematicas/Administracion%20Electronica/OVEELL/Paginas/DeudaViva.aspx
---

<div class="container">
  <div class="controls_cont" class="clearfix">
    <ul id="controls" class="clearfix">
      <li class="control_holder">
        <h4>Porcentaje de presupuesto destinado a pagar deuda</h4>
        <div id="deviation"></div>
        <div class="legend">
          <span id="deviation_number"></span>
        </div>
      </li>
      <li class="control_holder">
        <h4>Habitantes</h4>
        <div id="population"></div>
        <div class="legend">
          Entre <span id='size_value_0'></span> y <span id='size_value_1'></span>
        </div>
      </li>
      <li class="control_holder">
        <h4>Comunidad Autónoma</h4>
        <div id="aarr_province"></div>
      </li>
    </ul>
  </div>
  <div id="municipalitiesDebtScatterPlot" data-chart-container="municipalitiesDebtScatterPlot" width="100%" data-chart-data-url="/charts/explore-debt.csv">
    <div id="plot"></div>
    <div id="bars"></div>
    <div id="search">
      <h4>Localiza un municipio</h4>
      <input id="suggest" type="text" placeholder="Nombre Municipio">
    </div>
  </div>
</div>
