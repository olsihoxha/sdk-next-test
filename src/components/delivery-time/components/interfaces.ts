export interface DeliveryTimeInterface {
  setEditMode: any;
  scheduledDelivery: ScheduledData;
  sx?: string;
}

export interface DeliveryTimeInfoProps extends DeliveryTimeInterface, DeliveryInfoInit {}

export interface EditTimeProps extends DeliveryTimeInterface {
  setScheduledDelivery: any;
}

export interface ScheduledData {
  date: string;
  timeRange: string;
}

export interface DeliveryInfoInit {
  numDeliverItems: number;
  deliverTime: string;
  numShippingItems: number;
  shippingTime: string;
  sx?: string;
}
