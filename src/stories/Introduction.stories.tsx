import * as React from 'react';
import introduction from './Introduction';
import styles from './Introduction.module.scss';

export default {
    component: introduction,
    title: "Introduction",
    parameters: {
      controls: { hideNoControlsWarning: true },
      options: { showPanel: false }
    },
  };

export const Introduction = () => {
  
return <div>
    <h1 className={styles['fontFamilyTitle']}>Web Parts Design System</h1>
    <p className={styles['fontFamilyTitle']}>O presente projeto foi desenvolvido no âmbito da unidade curricular (UC) de <strong>Projeto Final/Estágio</strong> (PF/E), que se integra no segundo semestre do 3º ano da Licenciatura em Tecnologias e Sistemas de Informação para a Web (TSIW), lecionada na Escola Superior da Media Artes e Design (ESMAD) no ano letivo 2022/2023.
    Para a sua realização, a equipa de acolhimento foi a <strong>BindTuning</strong>, que se localiza em Vila do Conde e o estágio decorreu entre 6 de Março de 2023 e 22 de Junho de 2023.</p>
    <p className={styles['fontFamilyTitle']}>O objetivo é criar um <strong>Design System</strong> abordando as metodologias de <strong>Atomic Design</strong> criada por Brad Frost e <strong>Design Tokens</strong>.</p>
    <div className={styles['vantagens']}><h3 className={styles['fontFamilyTitle']}>É NECESSÁRIO RETIRAR OS IMPORTS DE COMENTÁRIOS AO COLOCÁ-LOS NO CÓDIGO</h3></div>
    <div className={styles['vantagens']}>
    <h3 className={styles['fontFamilyTitle']}>Vantagens do uso destas metodologias num Design System</h3>
    </div>
    <div>
      <ul>
    <li><h4 className={styles['fontFamilyTitle']}>Consistência</h4>
    </li>
    <li><h4 className={styles['fontFamilyTitle']}>Eficiência</h4></li>
    <li><h4 className={styles['fontFamilyTitle']}>Flexibilidade</h4></li>
    <li><h4 className={styles['fontFamilyTitle']}>Colaboração</h4></li>
    <li><h4 className={styles['fontFamilyTitle']}>Marca</h4></li>
    </ul>
    </div>
    </div> }