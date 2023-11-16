import React from 'react'

function ManageLocals(data){
    var comerceList = [
        ["Automoció", data.nautomocio],
        ["Equipament personal", data.nequipamentPersonal],
        ["Oci i cultura",  data.nociCultura],
        ["Apartament i llar",  data.nparamentLlar],
        ["Quotidià alimentari",  data.nquotidiaAlimentari],
        ["Quotidià no alimentari",  data.nquotidiaNoAlimentari],
        ["Serveis",  data.nserveis],
        ["Altres", data.naltres]]
    
    
    var comerceListFormated = comerceList.map(([name, num]) => {
        return `${name}: ${num}` 
          }).join('\n');
    return(comerceListFormated);
}

function PopupContent({ data, selectedFilter}) {
    const indexFilter = selectedFilter.selectedFilter;
    const formatedLocalList = ManageLocals(data);
   
    let dataOfSelectedFilter;
    switch (indexFilter) {
        case "0":
          
          break;
        case "1":
          
          break;
        case "2":
            dataOfSelectedFilter = formatedLocalList;
          console.log(dataOfSelectedFilter)
          break;
        
      }
    return (
      <div>
        <b><p>{data.nomBarri}</p></b>
        <p style={{ whiteSpace: 'pre-line' }}>{dataOfSelectedFilter}</p>
      </div>
    );
}

export default PopupContent


