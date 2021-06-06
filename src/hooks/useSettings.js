import { useContext } from 'react';
import SettingsContext from '@src/contexts/settingsContext';

const useSettings = () => useContext(SettingsContext);

export default useSettings;
