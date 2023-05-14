import React from "react";

function HomeView() {
  return (
    <div>
      <h1 className="text-3xl font-bold pb-20 text-blue-400">Chi Fou Mi</h1>
      <p className="text-left px-14 pb-10">
        Le jeu de pierre-papier-ciseaux est un jeu simple et populaire dans le
        monde entier. Il est souvent utilisé pour régler des disputes, prendre
        des décisions rapides ou tout simplement passer le temps. Dans cet
        article, nous allons vous expliquer les règles de base de ce jeu et vous
        donner quelques astuces pour devenir un expert en pierre-papier-ciseaux.{" "}
      </p>

      <div className="grid grid-cols-3 gap-3 mb-20">
        <div>
          <p className="font-bold">Nombre de Joueurs :</p>
          <p>2 ou +</p>
        </div>
        <div>
          <p className="font-bold">Temps de jeu :</p>
          <p>20 secondes</p>
        </div>
        <div>
          <p className="font-bold">Matériel de Jeu :</p>
          <p>Ses mains</p>
        </div>
      </div>

      <p className="text-left px-14 pb-6 font-bold text-2xl">
        Les formes de mains Pour Pierre Feuille Ciseaux
      </p>
      <p className="text-left px-14 pb-10">
        Voici les trois principales combinaisons permettant de joueur à Pierre
        feuille ciseaux. Elles composent les techniques de bases du jeu :
      </p>

      <div className="grid grid-cols-3 gap-3 mb-14 mx-24">
        <div>
          <p className="font-bold">Pierre</p>
          <img className="pt-5 pb-10" src={"/pierre.png"} alt="Pierre" />
          <p>La main fermée en poing représente la pierre</p>
        </div>
        <div>
          <p className="font-bold">Feuille</p>
          <img className="pt-5 pb-10" src={"/feuille.png"} alt="feuille" />
          <p>La main à plat, paume vers le sol, symbolise la feuille</p>
        </div>
        <div>
          <p className="font-bold">Ciseaux</p>
          <img className="pt-5 pb-10" src={"/ciseaux.png"} alt="ciseaux" />
          <p>L’index et le majeur qui forment un V pour les ciseaux</p>
        </div>
      </div>

      <div className="text-left px-14 pb-10">
        <p className="font-bold text-2xl pb-6">
          Comment jouer à pierre papier ciseaux ?
        </p>
        <p className="pb-6">
          Les règles du jeu sont vraiment très simples et vous n’avez besoin de
          rien pour jouer, si ce n’est que vos mains. Comme il existe plusieurs
          variantes je vais vous présenter les règles de la version classique du
          shifumi qui se joue à 2 joueurs. A l’aide de vos mains vous aurez la
          possibilité de choisir entre 3 signes : la pierre, le papier ou les
          ciseaux.
        </p>
        <p className="mb-6">
          1. Les 2 joueurs doivent placer leurs mains dans le dos <br />
          2. Prononcez Shi Fu Mi (se prononce Chi Fou Mi) ou comptez jusqu’à 3{" "}
          <br />
          3. Dévoilez votre choix en réalisant le signe avec votre main
        </p>
        <p className="mb-6">
          Une fois que les deux joueurs ont dévoilés leurs signes voici comment
          est déterminé le gagnant.
        </p>
        <p className="mb-6">
          - La pierre casse les ciseaux, la pierre gagne contre les ciseaux{" "}
          <br />
          - Les ciseaux coupent le papier, les ciseaux gagnent contre le papier{" "}
          <br />- Le papier recouvre la pierre, le papier gagne contre la pierre
        </p>
        <p>En cas d’égalité vous rejouez jusqu’à ce qu’il y ait un gagnant.</p>
      </div>
    </div>
  );
}

export default HomeView;
