import Competence from "./Components/Competence/Competence.jsx";
import Profession from "./Components/Profession/Profession.jsx";
import React from "react";
import { useState } from 'react';
import "./App.scss";

export default function App() {
        
    const [mainArray, setMainArray] = useState([
        {
            name: "Финансовый аналитик",
            mainSkills: ["Excel", "SQL", "VBA", "1С"],
            otherSkills: ["Power BI", "Python"],
         },
        {
            name: "Предприниматель",
            mainSkills: ["1C", "Excel", "Power BI"],
            otherSkills: [
                "Google Analytics",
                "Яндекс.Метрика",
                "Python",
                "SQL",
                "Tilda",
            ],
        },
        {
            name: "Продуктовый дизайнер",
            mainSkills: [
                "Figma",
                "Sketch",
                "Illustrator",
                "Photoshop",
                "Principle",
                "Tilda",
            ],
            otherSkills: ["Shopify", "Protopie", "Cinema 4D"],
        },
        {
            name: "Менеджер проекта",
            mainSkills: [
                "Visio",
                "1C",
                "Google Analytics",
                "Яндекс.Метрика",
                "Python",
                "SQL",
                "Tilda",
            ],
            otherSkills: ["Figma", "Sketch", "Shopify"],
        },
        {
            name: "Финансовый менеджер",
            mainSkills: ["1C", "Excel", "Power BI"],
            otherSkills: ["BPMN"],
        },
        {
            name: "Руководитель финансового департамента компании",
            mainSkills: ["Sketch", "Figma"],
            otherSkills: ["Shopify", "HQL"],
        },
        {
            name: "Продуктовый аналитик",
            mainSkills: [
                "Google Analytics",
                "Яндекс.Метрика",
                "SQL",
                "Power BI",
                "Python",
                "Excel",
            ],
            otherSkills: ["HQL", "Tableau", "R", "Machine learning"],
        },
        {
            name: "Руководитель финансового продукта",
            mainSkills: ["Visio"],
            otherSkills: ["Python"],
        },
        {
            name: "Менеджер по маркетингу",
            mainSkills: [
                "Google Analytics",
                "Яндекс.Метрика",
                "Google Ads",
                "Ahrefs",
                "Главред",
                "My Target",
            ],
            otherSkills: ["Tilda", "Photoshop", "Xenu", "Python"],
        },
        {
            name: "Менеджер по цифровой трансформации",
            mainSkills: [
                "Visio",
                "Google Analytics",
                "Яндекс.Метрика",
                "Python",
                "SQL",
                "Tilda",
            ],
            otherSkills: ["Figma", "Sketch", "Shopify"],
        },
        {
            allSkills: [
                "Sketch",
                "Shopify",
                "Excel",
                "SQL",
                "VBA",
                "1С",
                "Power BI",
                "Python",
                "Google Analytics",
                "Яндекс.Метрика",
                "Tilda",
                "Figma",
                "Illustrator",
                "Photoshop",
                "Principle",
                "Protopie",
                "Cinema 4D",
                "Visio",
                "BPMN",
                "HQL",
                "Tableau",
                "R",
                "Machine learning",
                "Google Ads",
                "Ahrefs",
                "Главред",
                "My Target",
                "Xenu",
            ]
        },{
            allProfessions: [
                "Финансовый аналитик",
                "Предприниматель",
                "Менеджер по цифровой трансформации",
                "Менеджер по маркетингу",
                "Финансовый менеджер",
                "Руководитель финансового департамента компании",
                "Руководитель финансового продукта",
                "Продуктовый дизайнер",
                "Менеджер проекта",
                "Продуктовый аналитик ",
            ]
        },
    ]);


  return (
            <>
                <div className="competence-parrent">
                    <Competence arr={mainArray} number="1" />
                    <Competence arr={mainArray} number="2"/> 
                    <Competence arr={mainArray} number="3"/>
                    <Competence arr={mainArray} number="4"/>
                    <Competence arr={mainArray} number="5"/>
                    <Competence arr={mainArray} number="6"/>
                    <Competence arr={mainArray} number="7"/>
                    <Competence arr={mainArray} number="8"/>
                    <Competence arr={mainArray} number="9"/>
                    <Competence arr={mainArray} number="10"/>
                    <Competence arr={mainArray} number="11"/>
                    <Competence arr={mainArray} number="12"/>
                    <Competence arr={mainArray} number="13"/>
                    <Competence arr={mainArray} number="14"/>
                    <Competence arr={mainArray} number="15"/>
                    <Competence arr={mainArray} number="16"/>
                    <Competence arr={mainArray} number="17"/>
                    <Competence arr={mainArray} number="18"/>
                    <Competence arr={mainArray} number="19"/>
                    <Competence arr={mainArray} number="20"/>
                    <Competence arr={mainArray} number="21"/>
                    <Competence arr={mainArray} number="22"/>
                    <Competence arr={mainArray} number="23"/>
                    <Competence arr={mainArray} number="24"/>
                    <Competence arr={mainArray} number="25"/>
                    <Competence arr={mainArray} number="26"/>
                    <Competence arr={mainArray} number="27"/>
                    <Competence arr={mainArray} number="28"/>
                </div>
                <div className="profession-parrent">
                    <Profession arr={mainArray} profNumber="1" />
                    <Profession arr={mainArray} profNumber="2" />
                    <Profession arr={mainArray} profNumber="3" />
                    <Profession arr={mainArray} profNumber="4" />
                    <Profession arr={mainArray} profNumber="5" />
                    <Profession arr={mainArray} profNumber="6" />
                    <Profession arr={mainArray} profNumber="7" />
                    <Profession arr={mainArray} profNumber="8" />
                    <Profession arr={mainArray} profNumber="9" />
                    <Profession arr={mainArray} profNumber="10" />
                </div>
            </>
  );
}
