package de.igslandstuhl.database.api.modules;

public class BoolSetting extends ModuleSetting<Boolean> {
    public BoolSetting(String key, String name, String description, boolean defaultValue) {
        super(key, name, description, defaultValue);
    }

    public void toggle() {
        setValue(!getValue());
    }
    public void enable() {
        setValue(true);
    }
    public void disable() {
        setValue(false);
    }
    public boolean isEnabled() {
        return getValue();
    }
}
