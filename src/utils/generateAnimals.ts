import { faker } from "@faker-js/faker";

export interface Animal {
  id: string;
  type: string;
  url: string;
  title: string;
  description: string;
  image: string;
}

const animalGenerators = {
  bear: faker.animal.bear,
  bird: faker.animal.bird,
  cat: faker.animal.cat,
  cetacean: faker.animal.cetacean,
  cow: faker.animal.cow,
  crocodilia: faker.animal.crocodilia,
  dog: faker.animal.dog,
  fish: faker.animal.fish,
  horse: faker.animal.horse,
  insect: faker.animal.insect,
  lion: faker.animal.lion,
  rabbit: faker.animal.rabbit,
  rodent: faker.animal.rodent,
  snake: faker.animal.snake,
} as const;

const getRandomAnimalType = (): keyof typeof animalGenerators => {
  const types = Object.keys(
    animalGenerators,
  ) as (keyof typeof animalGenerators)[];
  return faker.helpers.arrayElement(types);
};

export const generateAnimal = (): Animal => {
  const type = getRandomAnimalType();
  return {
    id: faker.string.uuid(),
    type,
    url: `https://${faker.internet.domainName()}`,
    title: animalGenerators[type](),
    description: faker.lorem.sentence(),
    image: faker.image.urlPicsumPhotos({ width: 644, height: 362 }),
  };
};

export const generateAnimalList = (count: number): Animal[] => {
  return Array.from({ length: count }, generateAnimal);
};

export const filterAnimals = (animals: Animal[], query: string): Animal[] => {
  return animals.filter(
    (animal) =>
      animal.title.toLowerCase().includes(query.toLowerCase()) ||
      animal.type.toLowerCase().includes(query.toLowerCase()),
  );
};

export const fetchFilteredAnimals = (
  query: string,
  count: number = 100,
): Animal[] => {
  const allAnimals = generateAnimalList(count);
  return filterAnimals(allAnimals, query);
};

export const fetchAnimals = (
  query: string,
  count: number = 100,
): Promise<Animal[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const animals = fetchFilteredAnimals(query, count);
      resolve(animals);
    }, 1500);
  });
};
