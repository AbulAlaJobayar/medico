/* eslint-disable react/jsx-key */
"use client";

import Link from "next/link";
import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import MedicoForm from "@/components/Forms/MedicoForm";
import MedicoInput from "@/components/Forms/MedicoInput";
import { Button, Image, Card, Upload } from "antd";
import { FieldValues } from "react-hook-form";
import MedicoSelect from "@/components/Forms/MedicoSelect";

export const defaultValues = {
  password: "",
  gender: "",
  bloodGroup: "",
  height: "",
  weight: "",
  diet: "",
  pulse: "",
  dietaryPreferences: "",
  maritalStatus: "",
  patient: {
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    address: "",
    profilePhoto: "",
  },
};

const CreatePatients = () => {
  const handleFileUpload = async (file: File) => {
    console.log(file);

    // try {
    //   const image = await uploadImageToImgbb(file);

    //   const updatedUserData = {
    //     id: data?.data?._id,
    //     userData: {
    //       photoUrl: image },
    //   };

    //   const upload = await updateMyProfile(updatedUserData).unwrap();
    //   if (upload?.success) {
    //     toast.success("Profile photo updated successfully");
    //   }
    // } catch (error) {
    //   console.error("Failed to upload image:", error);
    // }
  };

  const handleCreatePatient = async (values: FieldValues) => {
    console.log(values);
  };

  return (
    <>
      {/* Header Section */}
      <div className="mx-4 flex items-center justify-between mt-4">
        <h2 className="text-lg text-[#495057] font-semibold">
          Add New Patient
        </h2>
        <div className="flex items-center gap-1 text-[#495057] text-sm">
          <Link href="/admin">Dashboard</Link>/
          <Link href="/admin/patients">Patients</Link>/
          <Link href="#">Add New Patient</Link>
        </div>
      </div>

      <div className="mt-5 ml-4">
        <Link
          href="/admin/doctors"
          className="text-white text-sm bg-[#556ee6] py-2 px-4 rounded-md"
        >
          <ArrowLeftOutlined className="mr-1" /> Back to Patient List
        </Link>
      </div>

      {/* Doctor Form */}
      <div className="px-4 sm:px-8 mt-8">
        {/* Section Header */}
        <div className="w-full border border-gray-200 rounded-md border-l-blue-500 px-4 py-4 mb-6">
          Basic Information
        </div>

        <MedicoForm onSubmit={handleCreatePatient} defaultValues={defaultValues}>
          {/* Rows of Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <MedicoInput
              label="First Name"
              type="text"
              name="patient.firstName"
            />
            <MedicoInput
              label="Last Name"
              type="text"
              name="patient.lastName"
            />
            <MedicoInput label="Email" type="text" name="patient.email" />
            <MedicoInput
              label="Contact No"
              type="text"
              name="patient.contactNumber"
            />

            <MedicoInput label="Address" type="text" name="patient.address" />
            <div className="w-full">
              <p
                className="block text-sm font-medium text-gray-700"
                style={{ marginBottom: "5px" }}
              >
                Profile URL
              </p>
              <Card
              style={{
                height: "180px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
                cover={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "180px",
                      width: "180px",
                      margin: "auto",
                      borderRadius: "8px",
                    }}
                  >
                    <Upload
                      customRequest={({ file }) =>
                        handleFileUpload(file as File)
                      }
                      showUploadList={false}
                      accept="image/*"
                    >
                      <Image
                        src="https://i.ibb.co/Gx3Rg6S/download.jpg"
                        alt="User Photo"
                        preview={false}
                        style={{
                          marginTop: "40px",
                          height: "140px",
                          width: "140px",
                          objectFit: "cover",
                          cursor: "pointer",
                          borderRadius: "50%",
                          border: "2px solid #ddd",
                        }}
                      />
                    </Upload>
                  </div>
                }
              />
            </div>
          </div>

          {/* 2nd section */}
          <div className="mt-6 w-full border border-gray-200 rounded-md border-l-blue-500 px-4 py-4 mb-6">
            Medical Information
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <MedicoSelect
              name="gender"
              label="Gender"
              options={[
                { value: "MALE", label: "Male" },
                { value: "FEMALE", label: "Female" },
                { value: "UNKNOWN", label: "Unknown" },
              ]}
            />
            <MedicoSelect
              name="bloodGroup"
              label="Blood Group"
              options={[
                { value: "A_POSITIVE", label: "A_POSITIVE" },
                { value: "A_NEGATIVE", label: "A_NEGATIVE" },
                { value: "B_POSITIVE", label: "B_POSITIVE" },
                { value: "B_NEGATIVE", label: "B_NEGATIVE" },
                { value: "O_POSITIVE", label: "O_POSITIVE" },
                { value: "O_NEGATIVE", label: "O_NEGATIVE" },
                { value: "AB_POSITIVE", label: "AB_POSITIVE" },
                { value: "AB_NEGATIVE", label: "AB_NEGATIVE" },
              ]}
            />
            <MedicoInput label="Height" type="text" name="height" />
            <MedicoInput label="Weight" type="text" name="weight" />

            <MedicoSelect
              name="diet"
              label="Diet"
              options={[
                { value: "Vegetarian", label: "Vegetarian" },
                { value: "Non-Vegetarian", label: "Non-Vegetarian" },
                { value: "Vegan", label: "Vegan" },
              ]}
            />
            <MedicoInput label="Pulse" type="text" name="pulse" />
            <MedicoInput
              label="Dietary Preferences"
              type="text"
              name="dietaryPreferences"
            />
            <MedicoSelect
              name="maritalStatus"
              label="Marital Status"
              options={[
                { value: "MARRIED", label: "MARRIED" },
                { value: "UNMARRIED", label: "UNMARRIED" },
              ]}
            />
          </div>

          {/* Submit Button */}
          <Button
            htmlType="submit"
            size="large"
            className="my-4 rounded-md bg-[#485EC4] px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full md:w-auto"
          >
            Add New Patient
          </Button>
        </MedicoForm>
      </div>
    </>
  );
};

export default CreatePatients;
