"use client";

import React, { useEffect, useState } from "react";
import characterService from "@/services/rick-morty/characterService";
import { Character } from "@/types/rick-morty/allCharacters";
import CharacterSnippet from "./components/CharacterSnippet";
import CharacterModal from "./components/CharacterModal";

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Character List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((character) => (
          <CharacterSnippet
            key={character.id}
            character={character}
            onClick={() => handleCharacterClick(character)}
          />
        ))}
      </div>
      {selectedCharacter && (
        <CharacterModal character={selectedCharacter} onClose={closeModal} />
      )}
    </div>
  );
};

export default CharacterList;
