export interface Player {
    ID: string;
    Name: string;
    Shirt_Number: number;
    Position: string;
    Age: number;
    Height: number;
    Preferred_Foot: {
      Dominant_Foot: string;
      Weak_Foot_Level: number;
    };
    Stamina: number;
    Fitness: string;
    Nationality: string;
    Stats: {
      [key: string]: {
        [stat: string]: number;
      };
    };
    Averages: {
      [category: string]: number;
    };
  }
  
  export interface PlayersData {
    players: Player[];
  }