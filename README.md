## React-Native Template With Map
In this project the intention was to create a proof of concept to show as fast as possible an APP made in a hybrid platform presenting maps and some points. The standarts for React are not the best but the gradle config and required libs of android are instaled.


### Suporte
- Android Only (I have not implemented map support for ios yet)


#### Requirement

You Need Set Your Api Key On AndroidManifest.xml

- Set on: \android\app\src\main\AndroidManifest.xml

```
<manifest ...
	<application ...
	<meta-data
		  android:name="com.google.android.geo.API_KEY"
		  android:value="<YourApiKey>"/>
		  ...
	</application>
</manifest>
```

#### Develop Mode

Runs your app in development mode.
```
yarn run android
```
or
```
yarn run ios
```

## Customizing App Display Name and Icon

You can edit `app.json` to include [configuration keys]

