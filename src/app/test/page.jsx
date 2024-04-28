"use client";
import { useState, useEffect } from "react";

import dynamic from "next/dynamic";
import Loading from "../Loading";

const MyComponentsDynamic = dynamic(() => import("../myComponents"), {
  loading: () => <Loading />,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler une durée de chargement avant de masquer l'animation de chargement
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000); // 2000 millisecondes (2 secondes)

    // Nettoyer le timer lors du démontage du composant
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading /> // Afficher l'animation de chargement si isLoading est vrai
      ) : (
        <MyComponentsDynamic /> // Afficher votre composant dynamique une fois le chargement terminé
      )}
    </div>
  );
}
