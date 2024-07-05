"use client";
import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";
import ButtonV1 from "@/components/button/CustomButton";
import TableV1 from "@/components/table/TableV1";
import PricingCard from "@/components/pricing/PricingCard";
import { Flex } from "antd";
import { PricingPlanLandingPageType } from "@/interfaces/PricingPlan";

export default function Home() {
  const dummyPricingPlanLandingPage: PricingPlanLandingPageType = {
    pricing_id: "plan_001",
    pricing_name: "Basic Plan",
    pricing_start_date: "2024-01-01",
    pricing_end_date: "2024-12-31",
    is_free: "false",
    free_period: "none",
    free_period_count: 0,
    fee_id: "fee_001",
    feature_id: ["feat_001", "feat_002"],
    pricing_desc: "This is a basic plan offering essential featuressssssssssssssssssssssssssssssssssssssssssss.",
    fee: 29.99,
    features: [
      {
        feature_id: "feat_001",
        name: "Feature One",
        description: "Description for feature one.",
        fee_type: "monthly",
        is_valid: "true",
        created_at: "2024-01-01T00:00:00Z",
        updated_at: "2024-01-01T00:00:00Z"
      },
      {
        feature_id: "feat_002",
        name: "Feature Two",
        description: "Description for feature two.",
        fee_type: "monthly",
        is_valid: "true",
        created_at: "2024-01-01T00:00:00Z",
        updated_at: "2024-01-01T00:00:00Z"
      }
    ]
  };
  
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address"
    }
  ];
  const dummyData = [
    {
      key: "1",
      name: "John Doe",
      age: 32,
      address: "New York, NY"
    },
    {
      key: "2",
      name: "Jane Smith",
      age: 28,
      address: "London, UK"
    },
    {
      key: "3",
      name: "Bob Johnson",
      age: 45,
      address: "Paris, FR"
    }
  ];
  return (
    <Flex style={{width: "100%"}}>
      <TableV1 columns={columns} tableTitle="Permission" dataSource={dummyData} showSearchBar></TableV1>
      {/* <PricingCard PricingPlan={dummyPricingPlanLandingPage}></PricingCard>
      <PricingCard isPrimary={true} PricingPlan={dummyPricingPlanLandingPage}></PricingCard>
      <PricingCard PricingPlan={dummyPricingPlanLandingPage}></PricingCard> */}
    </Flex>
  );
}
