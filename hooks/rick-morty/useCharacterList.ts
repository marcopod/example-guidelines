// hooks/useCharacterList.js
import { useState, useEffect } from "react";
import characterService from "@/services/rick-morty/characterService";
import { Character } from "@/types/rick-morty/allCharacters";

export const useCharacterList = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await characterService.getAllCharacters();
        setCharacters(data.results);
      } catch (error) {
        setError("Failed to fetch characters");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  const handleCharacterClick = (character: Character) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  return {
    characters,
    loading,
    error,
    selectedCharacter,
    handleCharacterClick,
    closeModal,
  };
};
