import { useState } from 'react';

const useSettingMode = () => {
    const [mode, setMode] = useState(1)

    const settingMode = (payload) => {
        setMode(payload)
    }

    return {mode, settingMode}
}

export default useSettingMode