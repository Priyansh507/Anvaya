/**
 * State Mapping & Metadata for India
 * Maps state IDs from @svg-maps/india to full state names and cultural data
 */

export interface StateInfo {
  id: string;
  name: string;
  fullName: string;
  region: string;
}

export const INDIAN_STATES: StateInfo[] = [
  { id: 'an', name: 'Andaman & Nicobar', fullName: 'Andaman and Nicobar Islands', region: 'Island Territories' },
  { id: 'ap', name: 'Andhra Pradesh', fullName: 'Andhra Pradesh', region: 'South India' },
  { id: 'ar', name: 'Arunachal Pradesh', fullName: 'Arunachal Pradesh', region: 'Northeast India' },
  { id: 'as', name: 'Assam', fullName: 'Assam', region: 'Northeast India' },
  { id: 'br', name: 'Bihar', fullName: 'Bihar', region: 'Eastern India' },
  { id: 'ct', name: 'Chhattisgarh', fullName: 'Chhattisgarh', region: 'Central India' },
  { id: 'ga', name: 'Goa', fullName: 'Goa', region: 'Western India' },
  { id: 'gj', name: 'Gujarat', fullName: 'Gujarat', region: 'Western India' },
  { id: 'hr', name: 'Haryana', fullName: 'Haryana', region: 'Northern Plains' },
  { id: 'hp', name: 'Himachal Pradesh', fullName: 'Himachal Pradesh', region: 'Northern Himalayas' },
  { id: 'jh', name: 'Jharkhand', fullName: 'Jharkhand', region: 'Eastern India' },
  { id: 'ka', name: 'Karnataka', fullName: 'Karnataka', region: 'South India' },
  { id: 'kl', name: 'Kerala', fullName: 'Kerala', region: 'South India' },
  { id: 'mp', name: 'Madhya Pradesh', fullName: 'Madhya Pradesh', region: 'Central India' },
  { id: 'mh', name: 'Maharashtra', fullName: 'Maharashtra', region: 'Western India' },
  { id: 'mn', name: 'Manipur', fullName: 'Manipur', region: 'Northeast India' },
  { id: 'ml', name: 'Meghalaya', fullName: 'Meghalaya', region: 'Northeast India' },
  { id: 'mz', name: 'Mizoram', fullName: 'Mizoram', region: 'Northeast India' },
  { id: 'nl', name: 'Nagaland', fullName: 'Nagaland', region: 'Northeast India' },
  { id: 'or', name: 'Odisha', fullName: 'Odisha', region: 'Eastern India' },
  { id: 'pb', name: 'Punjab', fullName: 'Punjab', region: 'Northern Plains' },
  { id: 'rj', name: 'Rajasthan', fullName: 'Rajasthan', region: 'Western Desert' },
  { id: 'sk', name: 'Sikkim', fullName: 'Sikkim', region: 'Northern Himalayas' },
  { id: 'tn', name: 'Tamil Nadu', fullName: 'Tamil Nadu', region: 'South India' },
  { id: 'tg', name: 'Telangana', fullName: 'Telangana', region: 'South India' },
  { id: 'tr', name: 'Tripura', fullName: 'Tripura', region: 'Northeast India' },
  { id: 'up', name: 'Uttar Pradesh', fullName: 'Uttar Pradesh', region: 'Northern Plains' },
  { id: 'ut', name: 'Uttarakhand', fullName: 'Uttarakhand', region: 'Northern Himalayas' },
  { id: 'wb', name: 'West Bengal', fullName: 'West Bengal', region: 'Eastern India' },
  { id: 'jk', name: 'Jammu & Kashmir', fullName: 'Jammu and Kashmir', region: 'Northern Himalayas' },
  { id: 'la', name: 'Ladakh', fullName: 'Ladakh', region: 'Northern Himalayas' },
  { id: 'dl', name: 'Delhi', fullName: 'National Capital Territory of Delhi', region: 'Northern Plains' },
  { id: 'py', name: 'Puducherry', fullName: 'Puducherry', region: 'South India' },
  { id: 'ch', name: 'Chandigarh', fullName: 'Chandigarh', region: 'Northern Plains' },
  { id: 'dn', name: 'Dadra & Nagar Haveli', fullName: 'Dadra and Nagar Haveli and Daman and Diu', region: 'Western India' },
  { id: 'ld', name: 'Lakshadweep', fullName: 'Lakshadweep', region: 'Island Territories' },
];

export const getStateByName = (stateName: string): StateInfo | undefined => {
  return INDIAN_STATES.find(
    (s) =>
      s.name.toLowerCase() === stateName.toLowerCase() ||
      s.fullName.toLowerCase() === stateName.toLowerCase()
  );
};

export const getStateById = (stateId: string): StateInfo | undefined => {
  return INDIAN_STATES.find((s) => s.id === stateId);
};

export const getStatesByRegion = (region: string): StateInfo[] => {
  return INDIAN_STATES.filter((s) => s.region === region);
};
