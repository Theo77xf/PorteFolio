import { useState } from 'react'
import './index.css'
import './styles/pluie.css'

function App() {
  return (
    <>
      <div className="matrix-bg"></div>
      <div className="portfolio-content">
        <nav className="navbar">
          <div className="nav-content">
            <div className="logo">Portfolio</div>
            <ul className="nav-links">
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#presentation">Présentation</a></li>
              <li><a href="#competences">Compétences</a></li>
              <li><a href="#projets">Projets</a></li>
              <li><a href="#veille">Veille</a></li>
            </ul>
          </div>
        </nav>

        <main>
          <section id="accueil" className="section">
            <div className="content">
              <h1>Bienvenue sur mon Portfolio</h1>
              <p className="subtitle">Développeur Full Stack</p>
              <div className="cta-buttons">
                <a href="#projets" className="btn primary">Voir mes projets</a>
              </div>
            </div>
          </section>

          <section id="presentation" className="section presentation-bg">
            <h2>Présentation</h2>
            <div className="presentation-columns">
              <div className="presentation-col">
                <h3>Parcours scolaire</h3>
                <div className="presentation-card">
                  <span className="presentation-date">2024 - 2026</span>
                  <strong>BTS SIO - IPSSI</strong>
                  <p>Spécialité SLAM, développement d'applications web et mobiles.</p>
                </div>
                <div className="presentation-card">
                <span className="presentation-date">2021 - 2024</span>
                  <strong>BACPRO MSPC - Lycée Maurice RONDEAU</strong>
                  <p>Maintenance des Systèmes de Production Connectés.</p>
                </div>
              </div>
              <div className="presentation-col">
                <h3>Expériences professionnelles</h3>
                <div className="presentation-card">
                  <span className="presentation-date">28 avril 2025 - 25 juin 2025</span>
                  <strong>Stage Développeur - Association APHS</strong>
                  <p>Développement de site vitrine et Application.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="competences" className="section competences-bg">

            <section class="competence-section">
            <h2 class="section-title">Mes Compétences</h2>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet" />

            <div className="competences-tableau">
              <table>
                <thead>
                  <tr>
                    <th>N°</th>
                    <th>Compétence</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Développement et maintenance de solutions applicatives</td>
                    <td>Conception, réalisation et intégration de logiciels répondant aux besoins des utilisateurs.</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Réalisation de tests et validation des solutions</td>
                    <td>Mise en œuvre de tests fonctionnels et techniques pour garantir la qualité du développement.</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Rédaction de documentation technique et utilisateur</td>
                    <td>Élaboration de guides, manuels.</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Support</td>
                    <td>Prise en charge des incidents et des demandes d'assistance et d'évolution.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="competence-grid">

              <div class="competence-category">
                <h3>Frontend</h3>
                <div class="competence-list">
                  <div class="competence-card html">
                    <i class="fa-brands fa-html5"></i>
                    <span>HTML5</span>
                  </div>
                  <div class="competence-card css">
                    <i class="fa-brands fa-css3-alt"></i>
                    <span>CSS3</span>
                  </div>
                  <div class="competence-card js">
                    <i class="fa-brands fa-js"></i>
                    <span>JavaScript</span>
                  </div>
                  <div class="competence-card react">
                    <i class="fa-brands fa-react"></i>
                    <span>React</span>
                  </div>
                  <div class="competence-card tailwind">
                    <i class="fa-solid fa-wind"></i>
                    <span>Tailwind</span>
                  </div>
                  <div class="competence-card python">
                    <i class="fa-brands fa-python"></i>
                    <span>Python</span>
                  </div>
                </div>
              </div>

   
            <div class="competence-category">
              <h3>Backend</h3>
              <div class="competence-list">
                <div class="competence-card node">
                  <i class="fa-brands fa-node-js"></i>
                  <span>Node.js</span>
                </div>

               
              <div class="competence-card sql">
                <i class="fa-solid fa-database"></i>
                <span>SQL</span>
              </div>
            </div>
            </div>

  
            <div class="competence-category">
              <h3>Outils</h3>
              <div class="competence-list">
                <div class="competence-card git">
                  <i class="fa-brands fa-git-alt"></i>
                  <span>Git</span>
                </div>
              <div class="competence-card vscode">
                <i class="fa-solid fa-code"></i>
                <span>VS Code</span>
              </div>
              <div class="competence-card figma">
                <i class="fa-brands fa-figma"></i>
                <span>Figma</span>
              </div>
             
              </div>
            </div>
            </div>
          </section>

            
          </section>

          <section id="projets" className="section projets-bg">
            <h2>Mes Projets</h2>
            <div className="projects-grid-better">
              <div className="project-card-better">
                <div className="project-thumb" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80)'}}></div>
                <div className="project-info">
                  <h3>Site LCFP</h3>
                  <div className="project-badges">
                    <span className="badge html">HTML</span>
                    <span className="badge css">CSS</span>
                    <span className="badge js">JavaScript</span>
                  </div>
                  <p>Site vitrine pour l'association LCFP (Lutte contre la Fibrose Pulmonaire).<br/>Lien : <a href="https://lcfp-asso.fr" target="_blank" rel="noopener noreferrer">lcfp-asso.fr</a></p>
                  <div className="project-links">
                    <a href="https://lcfp-asso.fr" className="btn small" target="_blank" rel="noopener noreferrer">Voir le site</a>
                  </div>
                </div>
              </div>
              <div className="project-card-better">
                <div className="project-thumb" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80)'}}></div>
                <div className="project-info">
                  <h3>Site APHS</h3>
                  <div className="project-badges">
                    <span className="badge html">HTML</span>
                    <span className="badge css">CSS</span>
                    <span className="badge js">JavaScript</span>
                  </div>
                  <p>Site vitrine pour l'association APHS (Association pour Personnes Handicapées Solidaires).</p>
                </div>
              </div>
              <div className="project-card-better">
                <div className="project-thumb" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80)'}}></div>
                <div className="project-info">
                  <h3>Projets APHS</h3>
                  <div className="project-badges">
                    <span className="badge python">Python</span>
                    <span className="badge html">HTML</span>
                    <span className="badge css">CSS</span>
                    <span className="badge js">JavaScript</span>
                  </div>
                  <p>Réalisation de macros Python pour l'association APHS.<br/>Développement d'un site web d'aide pour personnes handicapées (en cours de réalisation).</p>
                </div>
              </div>
              <div className="project-card-better">
                <div className="project-thumb" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80)'}}></div>
                <div className="project-info">
                  <h3>Projets Bibliotheque</h3>
                  <div className="project-badges">
                    <span className="badge php">PHP</span>
                  </div>
                  <p>Réalisation d'un site internet en groupe d'une bibliotheque en ligne.<br/>.</p>
                </div>
              </div>
              <div className="project-card-better">
                <div className="project-thumb" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80)'}}></div>
                <div className="project-info">
                  <h3>Projets RespireStats</h3>
                  <div className="project-badges">
                    <span className="badge php">Java</span>
                  </div>
                  <p>Amélioration d'une application de données de polluant pres des écoles dans toute l'ile de france.<br/>.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="veille" className="section veille-bg">
            <h2>Veille Technologique : Informatique & Handicap</h2>
            <div className="veille-grid">
              <div className="veille-card">
                <h3>Accessibilité Web</h3>
                <p>
                  L'accessibilité web vise à rendre les sites et applications utilisables par tous, y compris les personnes en situation de handicap (visuel, moteur, auditif, cognitif).<br/>
                  <strong>Enjeux :</strong> Respect des normes WCAG, navigation clavier, contrastes adaptés, alternatives textuelles pour les images.<br/>
                  <strong>Exemples :</strong> Utilisation d'ARIA, lecteurs d'écran, tests d'accessibilité avec des outils comme Wave ou Lighthouse.<br/>
                  <strong>Impact :</strong> Permet à chacun d'accéder à l'information et aux services en ligne, favorise l'inclusion numérique.
                </p>
                <a href="https://www.accessibility-developer-guide.com/" target="_blank" rel="noopener noreferrer" className="btn small">En savoir plus</a>
              </div>
              <div className="veille-card">
                <h3>Innovations technologiques pour l'autonomie</h3>
                <p>
                  Les nouvelles technologies offrent des solutions concrètes pour améliorer l'autonomie des personnes handicapées.<br/>
                  <strong>Exemples :</strong> Applications mobiles pour la communication (ex : pictogrammes), objets connectés pour la domotique, fauteuils roulants intelligents, interfaces cerveau-machine.<br/>
                  <strong>Impact :</strong> Facilite la vie quotidienne, l'accès à l'éducation, à l'emploi et à la mobilité.<br/>
                  <strong>Enjeux :</strong> Adapter les interfaces, garantir la compatibilité et la simplicité d'utilisation.
                </p>
                <a href="https://www.handicap.fr" target="_blank" rel="noopener noreferrer" className="btn small">Découvrir</a>
              </div>
              <div className="veille-card">
                <h3>Intelligence Artificielle & Handicap</h3>
                <p>
                  L'IA révolutionne l'accompagnement du handicap grâce à des outils personnalisés.<br/>
                  <strong>Exemples :</strong> Reconnaissance vocale pour la communication, sous-titrage automatique, applications de guidage pour déficients visuels, IA pour la lecture de documents.<br/>
                  <strong>Impact :</strong> Plus d'autonomie, meilleure intégration sociale et professionnelle.<br/>
                  <strong>Enjeux :</strong> Respect de la vie privée, accessibilité des algorithmes, adaptation aux besoins spécifiques.
                </p>
                <a href="https://webzine.okeenea.com/intelligence-artificielle-technologie-revolutionne-handicap/" target="_blank" rel="noopener noreferrer" className="btn small">Lire l'article</a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
