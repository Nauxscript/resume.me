
import type { MarkdownInstance } from "astro";

export type PartialSome<T extends Object, K extends keyof T> = {
  [KK in keyof T]: KK extends K ? never : T[KK];
} & {
  [KKK in K]?: KKK extends keyof T ? T[KKK] : never
}

export interface SkillInfo {
  name: string;
  desc: MarkdownInstance<Record<string, any>>[];
}

export interface ProjectInfo {
  name: string;
  time: string;
  link?: string;
  imgLink?: string; 
  type?: string;
  desc: MarkdownInstance<Record<string, any>>[];
}

export type InternshipInfo = PartialSome<ProjectInfo, 'desc'>

export interface CompanyInfo<T> {
  name: string;
  time: string;
  type: string;
  link: string; 
  projects: Array<T>;
}

export type WorkingExpData = CompanyInfo<ProjectInfo>

export type InternshipExpData = CompanyInfo<InternshipInfo>

export interface Link {
  text: string;
  preText: string;
  value: string;
}

export interface BaseInfo {
  name: string;
  name_en: string;
  post: string;
  base: string;
  gender: string;
  birth: string;
  university: string;
  major: string;
  education: string;
  graduation: string;
  gitee: Link;
  tel: Link;
  github: Link;
  blog: Link;
  mail: Link;
}