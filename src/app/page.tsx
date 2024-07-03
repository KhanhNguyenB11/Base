"use client";
import Image from "next/image";
import styles from "./page.module.css";
import CustomButton, { TestButton } from "@/components/button/CustomButton";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <TestButton
        customType="danger"
        title="add new"
        customSize="small"
        customDisabled={false}
      ></TestButton>
    </div>
  );
}
