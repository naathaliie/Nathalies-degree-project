"use client";
import ErrorNeedToBeLoggedIn from "@/app/components/ErrorNeedToBeLoggedIn";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { useRouter } from "next/navigation";

export default function PetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
  return (
    <>
      {currentUser ? (
        <div className="  bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25 grid grid-cols-3 ">
          <div className=" col-span-1 border-r-2 border-petCare-sapphireTeal-superLight mt-5">
            <div className=" flex text-petCare-sapphireTeal-dark py-5">
              <div className="flex flex-col gap-2 ml-10">
                <h1 className="text-xl font-semibold sm:text-3xl md:text-3xl">
                  Mina husdjur
                </h1>
                <h3 className="text-sm md:text-xl">
                  Här kan du se alla dina registrerade husdjur
                </h3>
              </div>
            </div>
            <aside className="flex gap-7  flex-wrap bg-petCare-myWhite rounded-lg px-10 pb-10 pt-5 mx-7 text-petCare-sapphireTeal-dark">
              {currentUsersPets.map((pet) => {
                return (
                  <div
                    key={pet._id}
                    className="border-2 p-4 w-40  flex flex-col justify-between items-center gap-5 transition-transform duration-300 hover:scale-110"
                    onClick={() => handleClickOnPet(pet._id)}
                  >
                    <p className=" flex items-center justify-center bg-petCare-sapphireTeal-superLight rounded-full w-20 h-20 ">
                      Bild
                    </p>
                    <p>{pet.name}</p>
                  </div>
                );
              })}
            </aside>
          </div>
          <main className="col-span-2">
            {children} {/* Här visas detaljer eller "välj ett djur" */}
          </main>
        </div>
      ) : (
        <div>
          <ErrorNeedToBeLoggedIn />
        </div>
      )}
    </>
  );
}
