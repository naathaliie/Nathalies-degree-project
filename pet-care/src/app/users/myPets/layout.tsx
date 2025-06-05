"use client";
import PetCareButton from "@/app/components/Buttons/PetCareButton";
import ErrorNeedToBeLoggedIn from "@/app/components/ErrorNeedToBeLoggedIn";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { useRouter } from "next/navigation";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Tooltip from "@mui/material/Tooltip";
import { Avatar } from "@mui/material";

const PetsLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const currentUser = useAppSelector(
    (state: RootState) => state.auth.currentUser
  );
  const allPets = useAppSelector((state: RootState) => state.pets.pets);

  const currentUsersPets = allPets.filter((p) => {
    if (p.ownerId === currentUser?._id) {
      return p;
    }
  });

  const handleClickOnPet = (id: string) => {
    router.push(`/users/myPets/${id}`);
  };

  const handleAddPet = () => {
    router.push(`/users/myPets/addPet`);
  };
  return (
    <>
      {currentUser ? (
        <div className=" bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25 flex flex-col md:grid grid-cols-2 md:grid-flow-col md:grid-cols-3 ">
          <div className="col-span-1 border-b-2 md:border-r-2 md:border-b-0 border-petCare-sapphireTeal-superLight mt-5">
            <div className="flex text-petCare-sapphireTeal-dark py-5">
              <div className="flex flex-col gap-2 ml-5 sm:ml-10">
                <h1 className="text-xl font-semibold sm:text-3xl md:text-3xl">
                  Mina husdjur
                </h1>
                <h3 className="text-sm md:text-xl mb-5">
                  Här kan du se alla dina registrerade husdjur
                </h3>
                <Tooltip title="Klicka här för att registrera ett nytt husdjur">
                  <PetCareButton
                    label="Lägg till"
                    icon={<AddCircleIcon />}
                    onClick={() => handleAddPet()}
                    size="small"
                  />
                </Tooltip>
              </div>
            </div>
            <aside className="flex flex-row md:flex-wrap border-2 gap-4 md:gap-7 overflow-auto bg-petCare-myWhite rounded-lg px-6 md:px-10 mb-7 py-7 m-2 md:mx-7 text-petCare-sapphireTeal-dark ">
              {currentUsersPets.map((pet) => {
                return (
                  <div
                    key={pet._id}
                    className="border-2 p-4 w-40  flex flex-col justify-between items-center gap-5 transition-transform duration-300 hover:scale-110"
                    onClick={() => handleClickOnPet(pet._id)}
                  >
                    <Avatar
                      src={pet.img}
                      sx={{
                        backgroundColor: "var(--petCare-sapphireTeal-dark)",
                        width: 100,
                        height: 100,
                      }}
                    >
                      {pet.name[0]}
                    </Avatar>
                    <p>{pet.name}</p>
                  </div>
                );
              })}
            </aside>
          </div>
          <main className="col-span-2">{children}</main>
        </div>
      ) : (
        <div>
          <ErrorNeedToBeLoggedIn />
        </div>
      )}
    </>
  );
};

export default PetsLayout;
