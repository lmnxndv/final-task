export interface ISteps {
  setCurrentStep: (step: number) => void;
}

export interface MainData {
  appointment?: string;
  classification?: string;
  nomenclature?: string;
  nomenclatureCheck?: boolean;
  content?: string;
}

interface OrderData {
  title: {
    content: string;
    preambula: string;
  };
  commandData: {
    bands: {
      body: string;
    }[];
  };
  mainTextData: {
    body: string;
  };
}

interface DistributionList {
  signer: {
    id: number;
    name: string;
    position: string;
  };
  visaEmployees: {
    id: number;
    name: string;
    position: string;
  }[];
  anotherUnitEmployees: {
    id: number;
    name: string;
    position: string;
  }[];
}
export interface TaskCard {
  mainData: MainData;
  orderData: OrderData;
  distributionList: DistributionList;
}
interface File {
  uid:string;
  name: string;
  type: string;
  percent: number
}

export interface UploadFile{
  file: File;
}