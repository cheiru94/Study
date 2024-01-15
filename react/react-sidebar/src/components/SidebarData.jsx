import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddCardIcon from "@mui/icons-material/AddCard";
import BackupIcon from "@mui/icons-material/Backup";
import SettingsIcon from "@mui/icons-material/Settings";

/* 사용할 데이터를 객체로 관리한다. */
// 객체의 프로퍼티 값으로 컴포넌트도 사용 가능!
export const SidebarData = [
  {
    title: "ホーム",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "メール",
    icon: <AttachEmailIcon />,
    link: "/mail",
  },
  {
    title: "アナリティクス",
    icon: <AssessmentIcon />,
    link: "/analitics",
  },
  {
    title: "友達追加",
    icon: <PersonAddIcon />,
    link: "/friends",
  },
  {
    title: "お支払い設定",
    icon: <AddCardIcon />,
    link: "/payment",
  },
  {
    title: "アップロード",
    icon: <BackupIcon />,
    link: "/upload",
  },
  {
    title: "詳細設定",
    icon: <SettingsIcon />,
    link: "/rocket",
  },
];
