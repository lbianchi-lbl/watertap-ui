



 

const data = `
<p>
Performance results<br/>
-------------------<br/>
<br/>
====================================================================================<br/>
Unit : fs.feed                                                             Time: 0.0<br/>
------------------------------------------------------------------------------------<br/>
    Stream Table<br/>
                                        Units            Outlet<br/>
    Volumetric Flowrate            meter ** 3 / second 0.00032860<br/>
    Mass Concentration H2O       kilogram / meter ** 3     993.24<br/>
    Mass Concentration cod       kilogram / meter ** 3     6.7600<br/>
    Mass Concentration hydrogen  kilogram / meter ** 3 3.0432e-05<br/>
    Mass Concentration methane   kilogram / meter ** 3 3.0432e-05<br/>
====================================================================================<br/>
<br/>
====================================================================================<br/>
Unit : fs.metab_hydrogen                                                   Time: 0.0<br/>
------------------------------------------------------------------------------------<br/>
    Unit Performance<br/>
    <br/>
    Variables:<br/>
    <br/>
    Key                               : Value      : Units             : Fixed : Bounds<br/>
                   Electricity Demand :     1162.7 :              watt : False : (0, None)<br/>
    Reaction Extent [cod_to_hydrogen] : 0.00048869 : kilogram / second : False : (None, None)<br/>
                 Solute Removal [cod] :     0.0000 :     dimensionless :  True : (0, None)<br/>
            Solute Removal [hydrogen] :     1.0000 :     dimensionless :  True : (0, None)<br/>
             Solute Removal [methane] :     0.0000 :     dimensionless :  True : (0, None)<br/>
                Thermal Energy Demand :     2587.7 :              watt : False : (0, None)<br/>
                       Water Recovery :     1.0000 :     dimensionless :  True : (1e-08, 1.0000001)<br/>
                       <br/>
------------------------------------------------------------------------------------<br/>
    Stream Table<br/>
                                        Units             Inlet     Treated   Byproduct<br/>
    Volumetric Flowrate            meter ** 3 / second 0.00032860 0.00032811 2.4445e-08<br/>
    Mass Concentration H2O       kilogram / meter ** 3     993.24     994.72 1.3741e-13<br/>
    Mass Concentration cod       kilogram / meter ** 3     6.7600     5.2807 1.3741e-13<br/>
    Mass Concentration hydrogen  kilogram / meter ** 3 3.0432e-05 1.3538e-17     1000.0<br/>
    Mass Concentration methane   kilogram / meter ** 3 3.0432e-05 3.0477e-05 1.3741e-13<br/>
====================================================================================<br/>
<br/>
====================================================================================<br/>
Unit : fs.metab_methane                                                    Time: 0.0<br/>
------------------------------------------------------------------------------------<br/>
    Unit Performance<br/>
    <br/>
    Variables:<br/>
    <br/>
    Key                              : Value      : Units             : Fixed : Bounds<br/>
                  Electricity Demand :     1452.4 :              watt : False : (0, None)<br/>
    Reaction Extent [cod_to_methane] :  0.0010223 : kilogram / second : False : (None, None)<br/>
                Solute Removal [cod] :     0.0000 :     dimensionless :  True : (0, None)<br/>
           Solute Removal [hydrogen] :     0.0000 :     dimensionless :  True : (0, None)<br/>
            Solute Removal [methane] :     1.0000 :     dimensionless :  True : (0, None)<br/>
               Thermal Energy Demand : 3.3589e-13 :              watt : False : (0, None)<br/>
                      Water Recovery :     1.0000 :     dimensionless :  True : (1e-08, 1.0000001)<br/>
                      <br/>
------------------------------------------------------------------------------------<br/>
    Stream Table<br/>
                                        Units             Inlet     Treated   Byproduct<br/>
    Volumetric Flowrate            meter ** 3 / second 0.00032811 0.00032709 1.0326e-07<br/>
    Mass Concentration H2O       kilogram / meter ** 3     994.72     997.83 3.2529e-14<br/>
    Mass Concentration cod       kilogram / meter ** 3     5.2807     2.1718 3.2529e-14<br/>
    Mass Concentration hydrogen  kilogram / meter ** 3 1.3538e-17 1.3580e-17 3.2529e-14<br/>
    Mass Concentration methane   kilogram / meter ** 3 3.0477e-05 8.4845e-20     1000.0<br/>
====================================================================================<br/>
Costing results<br/>
---------------<br/>
total_capital_cost : Total capital cost of process<br/>
    Size=1, Index=None, Units=USD_2020<br/>
    Key  : Lower : Value              : Upper : Fixed : Stale : Domain<br/>
    None :  None : 11823.499661517928 :  None : False : False :  Reals<br/>
total_operating_cost : Size=1<br/>
    Key  : Value<br/>
    None : 2712.285569717763<br/>
LCOW : Size=1<br/>
    Key  : Value<br/>
    None : 0.39679637906195503<br/>
    <br/>
Unit Capital Costs<br/>
<br/>
fs.metab_hydrogen.costing  :    4485.977310142091<br/>
fs.metab_methane.costing  :    7474.359231054592<br/>
<br/>
Utility Costs<br/>
<br/>
electricity  :    1855.184855203363<br/>
heat  :    503.90571098154373<br/>
hydrogen_product  :    -1560.6875315073473<br/>
methane_product  :    -1005.3689485532468<br/>
<br/>
Total Capital Costs: 0.0120 M$<br/>
Total Operating Costs: 0.0027 M$/year<br/>
Electricity Intensity: 2.2209 kWh/m^3<br/>
Levelized Cost of Water: 0.3968 $/m^3<br/>
Levelized Cost of COD Removal: 0.0859 $/kg<br/>
Levelized Cost of Hydrogen: 3.4632 $/kg<br/>
Levelized Cost of Methane: 1.2266 $/kg<br/>
</p>
`;


const data2 = {
    "System metrics": {
        "Recovery": [50.0, "%"],
        "Specific energy consumption": [2.4, "kWh/m3"],
        "Levelized cost of water": [0.53, "$/m3"]
    },
    "Feed": {
        "Volumetric flowrate": [3.6, "m3/h"],
        "Salinity": [35000.0, "ppm"],
        "Temperature": [298.0, "K"],
        "Pressure": [1.0, "bar"]
    },
    "Product": {
        "Volumetric flowrate": [1.8, "m3/h"],
        "Salinity": [497.0, "ppm"],
        "Temperature": [298.0, "K"],
        "Pressure": [1.0, "bar"]
    },
    "Disposal": {
        "Volumetric flowrate": [1.8, "m3/h"],
        "Salinity": [67774.0, "ppm"],
        "Temperature": [298.0, "K"],
        "Pressure": [1.0, "bar"]
    },
    "Decision variables": {
        "Operating pressure": [51.2, "bar"],
        "Membrane area": [130.4, "m2"],
        "Inlet crossflow velocity": [17.5, "cm/s"]
    },
    "System variables": {
        "Pump power": [6.3, "kW"],
        "ERD power": [2.0, "kW"],
        "Average water flux": [13.8, "L/[m2-h]"],
        "Pressure drop": [1.43, "bar"],
        "Max interfacial salinity": [68414.0, "ppm"]
    }
};


export const solve = (id) => {
    return fetch('http://localhost:8001/flowsheets/'+id+'/solve', {mode: 'cors'});
    /*return new Promise((resolve, reject) => { 
        resolve(data2);
    });*/
}; 

export const downloadCSV = (id,data) => {
    return fetch('http://localhost:8001/flowsheets/'+id+'/download', {
        method: 'POST', 
        mode: 'cors',
        body: JSON.stringify(data)
    });
}

export const saveConfig = (id,data) => {
    return fetch('http://localhost:8001/flowsheets/'+id+'/saveConfig', {
        method: 'POST', 
        mode: 'cors',
        body: JSON.stringify(data)
    });
}