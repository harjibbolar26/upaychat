import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CardProps } from "../types/models";
import { Link } from "react-router-dom";

interface CardDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  card: CardProps;
}

const CardDetails = ({ isOpen, closeModal, card }: CardDetailsProps) => {
  const { applicationLink, benefits, features, type } = card;
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="esae-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="esae-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                  >
                    <img
                      src="./close.svg"
                      width={20}
                      height={20}
                      alt="close"
                      className="object-contain "
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40  bg-cover bg-center rounded-lg">
                      <img
                        src="./upaychat.png"
                        alt="upay"
                        className=" w-full"
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-layarBahteraBold text-xl text-center uppercase">
                      {card.type} card details
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(card).map(
                        ([key, value]) =>
                          key !== "banner" && (
                            <div
                              className="flex justify-between gap-5 w-full text-right"
                              key={key}
                            >
                              <h4 className="text-grey capitalize font-layarBahtera">
                                {key.split("_").join(" ")}
                              </h4>
                              {Array.isArray(value) ? (
                                <div>
                                  {value.map((item: string) => (
                                    <p className="text-black-100 font-semibold font-layarBahteralight">
                                      {item}
                                    </p>
                                  ))}
                                </div>
                              ) : key === "applicationLink" ? (
                                <Link to={value} className="text-[#4EE567] font-layarBahtera">
                                  Get Started
                                </Link>
                              ) : (
                                <p className="text-black-100 font-semibold font-layarBahteralight">
                                  {value}
                                </p>
                              )}
                            </div>
                          )
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CardDetails;
