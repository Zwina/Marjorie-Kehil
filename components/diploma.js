"use client";

import { Button, Timeline } from "flowbite-react";
import { HiCalendar, HiArrowNarrowRight } from "react-icons/hi";

export default function Diploma() {
  return (
    <div className="diploma-container " id="section1">
      <h2 className="text-yellow-300 mb-8">Diplômes et certifications</h2>
      <div >
      <Timeline>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content className="ml-6">
            <Timeline.Title className="text-white">
              Concepteur Développeur d`&apos;`Applications
            </Timeline.Title>
            <Timeline.Time>Juillet 2023</Timeline.Time>
            <Timeline.Body>
              <div className="flex items-center mt-4">
                <span className="w-10 h-10 rounded-full">
                  <img
                    className="rounded-full ring-8 ring-gray-900 bg-blue-900"
                    src="http://localhost:3000/image/marianne.jpg"
                    alt="oc"
                  />
                </span>
                <p className="ml-3">Titre professionnel CDA | <a
              href="https://www.bourgogne-greta.fr/formation/titre-professionnel-concepteur-developpeur-dapplications-h-f-dijon/"
              target="_blank"
              rel="noopener noreferrer"
            >Greta21 (Dijon) </a>
                <br/>   - Conception et mise en place d`&apos;`applications web, mobiles et Desktop
                <br/>   - Développement back-end et front-end d`&apos;`applications
                <br/>   - Modélisation conceptuelle et mise en place de base de données
                <br/>   - Développement de composants dans le langage de base de données 
                <br/>   - Gestion de projet, versionning
                </p>
              </div>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content className="ml-6">
           
            <Timeline.Title className="text-white">
              Développement Backend et API
            </Timeline.Title>
            <Timeline.Time>2023</Timeline.Time>
            <Timeline.Body>
              <div className="flex items-center mt-4">
                <span className="w-10 h-10 rounded-full">
                  <img
                    className="rounded-full ring-8 ring-gray-900 bg-blue-900"
                    src="http://localhost:3000/image/openclassrooms.jpg"
                    alt="oc"
                  />
                </span>
                <p className="ml-3">Passez au Full Stack avec Node.js, Express et MongoDB | OpenClassroom</p>
              </div>
            </Timeline.Body>
            <Timeline.Body>
              <div className="flex items-center mt-4">
                <span className="w-10 h-10 rounded-full">
                  <img
                    className="rounded-full ring-8 ring-gray-900 bg-blue-900"
                    src="http://localhost:3000/image/freecodecamp.png"
                    alt="oc"
                  />
                </span>
                <p className="ml-3">Back End Development and APIs | FreeCodeCamp</p>
              </div>
            </Timeline.Body>
          </Timeline.Content >
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point
            icon={HiCalendar}
            className="background: none"
          />
          <Timeline.Content className="ml-6">
            
            <Timeline.Title className="text-white">
            Développement Frontend, responsive et design
            </Timeline.Title>
            <Timeline.Time>2022-2023</Timeline.Time>
            <Timeline.Body>
              <div className="flex items-center mt-4">
                <span className="w-10 h-10 rounded-full">
                  <img
                    className="rounded-full ring-8 ring-gray-900 bg-blue-900"
                    src="http://localhost:3000/image/openclassrooms.jpg"
                    alt="oc"
                  />
                </span>
                <p className="ml-3 leading-loose">
                Créez des sites web responsives avec Bootstrap 5 | OpenClassroom
                <br/>Débutez avec React | OpenClassroom
                </p>
              </div>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point
            icon={HiCalendar}
            className="border-gray-900 bg-gray-700 ring-gray-900"
          />
          <Timeline.Content className="ml-6">
            
            <Timeline.Title className="text-white">
              Programmation Générale
            </Timeline.Title>
            <Timeline.Time>2022-2023</Timeline.Time>
            <Timeline.Body>
              <div className="flex items-center mt-4">
                <span className="w-10 h-10 rounded-full">
                  <img
                    className="rounded-full ring-8 ring-gray-900 bg-blue-900"
                    src="http://localhost:3000/image/openclassrooms.jpg"
                    alt="oc"
                  />
                </span>
                
                <p className="ml-3 leading-loose"><a
                      href="https://openclassrooms.com/fr/course-certificates/2006490080"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-yellow-300"
                    >Apprenez à programmer avec JavaScript </a>| OpenClassroom
                <br />Apprenez à programmer en Java | OpenClassroom    
                </p>
                
              </div>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
      </div>
    </div>
  );
}
